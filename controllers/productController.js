import cloudinary from '../config/cloudinary.js'
import productModel from '../models/productmodel.js'


//function for adding a product


const addProduct = async (req,res) => {
try {
    const {name,description,price,category,subcategory,sizes,bestseller} = req.body

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)


    let imageUrl = await Promise.all (
        images.map(async(item)=>{
        //    console.log("Uploading to Cloudinary:", item.path);
           let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
        //    console.log("Cloudinary result:", result);
           return result.secure_url
        })
    )
    // console.log(name,description,price,category,subcategory,sizes,bestseller)
    // console.log("Final Cloudinary URLs:", imageUrl);

    const productData = {
        name,
        description,
        category,
        price:Number(price),
        subcategory,
        bestseller:bestseller === "true" ? true : false,
        sizes:JSON.parse(sizes),
        image:imageUrl,
        date:Date.now()
    } 
    console.log(productData)

    const product = await productModel(productData);
    await product.save()
    
    res.json({success:true,message:"Product Added"})

} catch (error) {
    console.error("Cloudinary upload error:", error)
    res.json({success:false,message:error.message})
}
}


// funcion for listproduct

const listProduct = async (req,res) => {

    try {
        const products = await productModel.find();
        res.json({success:true,products})
        console.log("productlist",products);
        
    } catch (error) {
       console.error(error)
       res.json({success:false,message:error.message})
    }
}




// funcion for removing a product

const removeProduct = async (req,res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.error(error)
        res.json({success:false,message:error.message})
    }
}


// funcion for single product

const singleProduct = async (req,res) => {
    
   try {

    const product = await productModel.findById(req.body.id)
    res.json({success:true,product})

   } catch (error) {
    console.error(error)
    res.json({success:false,message:error.message})
   }


}



const updateProduct = async (req, res) => {
    console.log("Request Body:", req.body);  
    
    try {
        const { id, name, description, category, price, image } = req.body;
        
        // Check if all required fields are provided
        if (!id) {
            return res.status(400).json({ success: false, message: "Product Id is required" });
        }

        // If you are using mongoose to update
        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            name,
            description,
            category,
            price,
            image
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({ success: true, message: "Product updated!", product: updatedProduct });
    } catch (error) {
        console.error("Error in updateProduct:", error);  // Log the exact error
        res.status(500).json({ success: false, message: error.message });
    }  };
  

export {addProduct,listProduct,removeProduct,singleProduct,updateProduct}
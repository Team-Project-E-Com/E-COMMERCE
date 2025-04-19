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



export {addProduct,listProduct,removeProduct,singleProduct}
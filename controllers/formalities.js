exports.postSuucess = (req,res,next)=>{
    res.sendFile(path.join(rootdir,"views","success.html"))
};
class ApiFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword=this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
                $options: "i",
            }
        } : {};
        this.query=this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryCopy= {...this.queryStr}
        //removing some fields so that only category remains
        const removeFields=["keyword","page","limit"];
        removeFields.forEach(key=>delete queryCopy[key]);
        this.query=this.query.find(queryCopy);
        return this;

    }
    pagination(resultperpage){
        const currentPage= Number(this.queryStr.page) || 1;
        const skip= resultperpage * (currentPage-1);
        this.query=this.query.limit(resultperpage).skip(skip);
        return this;
    }
}
export default ApiFeatures
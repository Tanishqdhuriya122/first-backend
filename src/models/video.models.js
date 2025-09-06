import mongoose,{Schema, Types} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema =  new Schema(
    {
        videoFile : {
            type : String, //clodinary url
            required : true
        },
        thumbnail : {
            type : Sring,//cloudinary utl
            rquired  : true
        },
        title : {
            type : Sring,
            rquired  : true
        },
        discription : {
            type : Sring,
            rquired  : true
        },
        duration : {
            type : Number, //cloudinary url
            rquired  : true
        },
        views : {
            type : Number,
            default : 0,
            
        },
        isPublished : {
            type : Bollean,
            default  : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref  : "User",
            rquired  : true
        }
    },{timestamps : true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoode.model("Video",videoSchema)
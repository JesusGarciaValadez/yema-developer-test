import Unsplash from "unsplash-js";

const PhotoService = new Unsplash({ accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY })

export default PhotoService

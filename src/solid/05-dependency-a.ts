import { PostService } from './05-dependency-b';
import { ApiWebPostProvider } from './05-dependency-c';


// Main
(async () => {

    const postProvider = new ApiWebPostProvider();
    const postService = new PostService( postProvider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();
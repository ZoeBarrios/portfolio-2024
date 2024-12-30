import { memo } from "react";
import PostIt from "./post_it"

const ListOfPostIts = memo(({ postIts }) => {


    return <div className="mt-10 flex flex-row flex-wrap items-start justify-center w-11/12 gap-5 ">
        {
            postIts.map((postIt) => {
                return <PostIt key={postIt._id} author={postIt.author} body={postIt.body} avatar={postIt.avatar} />
            })
        }
    </div>
});

export default ListOfPostIts;
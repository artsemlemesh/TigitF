import { createRef, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../../features/postSlice"






const PostList = ({activePost, setActivePost}) => {


    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.posts)
    const postStatus = useSelector((state) => state.posts.status)
    const error = useSelector((state) => state.posts.error)
    const postRefs = useRef([])

    postRefs.current = posts.map((_, i) => postRefs.current[i] ?? createRef());

    useEffect(() => {
        if (postStatus === 'idle'){
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    useEffect(()=> {
        const handleScroll = () => {
            const positions = postRefs.current.map(
                (ref) => ref.current.getBoundingClientRect().top
            )
            const index = positions.findIndex(
                (pos) => pos >= 0 && pos <= window.innerHeight / 2
            )
            if (index !== -1 && posts[index] && activePost !== posts[index].id) {
                setActivePost(posts[index].id)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [posts, activePost, setActivePost])




    let content;

    if (postStatus === 'succeeded'){
        content = posts.map((post, index) => (
            <div
                ref={postRefs.current[index]}
                key={index}
                className="col-span-1 lg:col-span-2 max-w-full rounded overflow-hidden shodow-lg mb-8 flex flex-col"
            >
                <div className="px-6 py-4 flex-grow">
                    <div className="font-bold text-2xl mb-2">{post.title}</div>
                    <p className="text-gray-700 text-base mb-4">{post.content}</p>
                </div>

            </div>
        ))
    }

    return (
        <section>
            <h2 className="text-3xl font-bold mb-8">Posts</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">{content}</div>

        </section>

    )
}


export default PostList
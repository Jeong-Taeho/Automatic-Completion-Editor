import LinkButton from "./LinkButton.js"
import PostList from "./PostList.js"
import { request } from "./api.js"

export default function PostsPage({ $target }) {
	const $page = document.createElement("div")

	const postList = new PostList({
		$target: $page,
		initialState: [],
	})

	new LinkButton({
		$target: $page,
		initialState: {
			text: "새로 만들기",
			link: "/posts/new",
		},
	})

	this.setState = async () => {
		const posts = await request("/posts") //API로 post를 받아와서
		postList.setState(posts)
		this.render()
	}

	this.render = async () => {
		$target.appendChild($page)
	}
}

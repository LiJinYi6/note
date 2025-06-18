import { useSearchParams, useParams } from "react-router-dom";
function Article() {
//   const [searchParams] = useSearchParams();
//   const id = searchParams.get("id");
//   const name = searchParams.get("name");
    const { id, name } = useParams();
  return (
    <div>
      <h1>Article Page</h1>
      <p>This is the article page content.</p>
      <p>Article ID: {id}</p>
      <p>Article Name: {name}</p>
    </div>
  );
}
export default Article;
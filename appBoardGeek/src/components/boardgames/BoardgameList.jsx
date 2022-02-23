import { gql, useQuery } from '@apollo/client';

const GET_BOARDGAMELIST_QUERY = gql`
  query {
        boardgameList{
            _id
            title
            publisher
        }
    }
`

function BoardgameList() {
    const {data, error, loading} = useQuery(GET_BOARDGAMELIST_QUERY)

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    console.log(data)

    const renderBoardgames = () => {
        return(
            data.boardgameList.map(boardgame => {
                return(
                    <li key={boardgame._id}>{boardgame.title}</li>
                )
            })
        )
    }

    return (
      <div>
        <ul>
            {renderBoardgames()}
        </ul>
      </div>
    );
  }
  
  export default BoardgameList;
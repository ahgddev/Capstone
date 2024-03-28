import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import ResultCard from "../components/search/ResultCard";
import axios from "axios"

function SearchResults() {
  const {q} = useParams();
  const [searchResults, setSearchResults] = useState();
  const [loading, setLoading] = useState();


  async function dataGrabber() {
    setLoading(true);
    try {
      let response = await axios.get(
        `https://capstone-be-16oc.onrender.com/search?q=${q}`,
        
      );
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataGrabber();
  }, []);

  return (
    <div id="searchContainer">
        <h1>Search Results</h1>
        <section id="resultsContainer">
        <div id="resultsContainer">
        {searchResults ? searchResults.map((resultCards) => {
            return (
              <Link to={'/post/' + resultCards.post_id}> <ResultCard
              key={"SRPost"+searchResults.indexOf(resultCards)}
                imgURL={resultCards.imgURL}
                username={resultCards.username}
                title={resultCards.title}
                postdate={resultCards.post_date}
                postText={resultCards.text}
              /></Link>
             
            );
          }) : <h1>No results!</h1>}
        </div>
        </section>
    </div>
  )
}

export default SearchResults
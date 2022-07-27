import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/server';

const QuoteGenerator = () => {
    const [quote, changeQuote] = useState("");
    const [fav, favQuote] = useState("");
    const [input, setInput] = useState('');

    useEffect(() => {
        generateQuote();
        addFav();
        subQuote();
    }, []);

    // Get quote from API and set in state
    const generateQuote = () => {
        const url = "https://api.kanye.rest/";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                changeQuote(res.quote)
            });
    }

    const addFav = () => {
        let favo = quote;
        favQuote(favo);
    }

    const subQuote = () => {
        setInput();
    }

   
    return (
        <div className="quote-container">
            <img src={require('./kanye.jpeg')} alt="kanye-img" width="300px" height="180px" />
            <h1>Kanye-West Quote</h1>
            <h3>{quote}</h3>
            <button type="button" onClick={generateQuote}>Get Quote</button>
            <button type="button" onClick={addFav}>Add Favorite</button>
            <hr style={{ maxWidth: "30%", marginTop: "5%" }}></hr>
            <p>{fav}</p>
            <h2>My Quotes</h2><form>
                <input onChange={event => setInput(event.target.value)}></input>
                <button type="button" onClick={subQuote}>Submit</button>
            </form>
            <p>{input}</p>
        </div>
    );
}

export default QuoteGenerator;
import { Card } from "../card/Card";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { FaSpinner } from "react-icons/fa6";


export const Container = ()=>{
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10); // Inicialmente, busca 10 citações

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.quotable.io/quotes/random?limit=${limit}minLength=500&tags=technology`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      const formattedQuotes = data.map(quote => ({
        author: quote.author,
        content: quote.content,
        dateAdded: format(new Date(quote.dateAdded), "dd 'de' MMM, yyyy"),
      }));
      setQuotes([...quotes, ...formattedQuotes]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [limit]);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const remainingHeight = documentHeight - (windowHeight + scrollTop);

    if (remainingHeight < 400 && !loading) {
      setLimit(prevLimit => prevLimit + 5); // Aumenta o limite em 5 ao chegar no final da página
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });


  return(
    <div className="relative sm:w-4/5 sm:p-8 lg:w-2/4 lg:left-1/4 my-8 text-white grid gap-6 place-items-center">
      {quotes.map((quote, index) => (
        <Card 
          key={index}
          author={quote.author}
          content={quote.content}
          dateAdded={quote.dateAdded}
        />
      ))}

      {loading && (
          <FaSpinner size={25} className="animate-spin text-[#E07B67]" />
      )}
    </div>
  )
}
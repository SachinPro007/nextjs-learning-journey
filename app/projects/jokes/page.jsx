"use client";
import "../../globals.css"

import React, { useEffect, useState } from "react";

function RandomJokes() {
  const [randomJoke, setRandomJoke] = useState({});
  const [showJoke, setShowJoke] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomJokes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const joke = await res.json();
      setRandomJoke(joke);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-2">
          Random Joke Generator
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Get ready to laugh with a new joke every time!
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Loading your joke...</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {randomJoke.setup || "No joke setup available"}
                </h2>
                
                {showJoke && (
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 transition-all duration-500 ease-in-out">
                    <p className="text-lg font-medium text-purple-800">
                      {randomJoke.punchline || "No punchline available"}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button 
                  onClick={() => setShowJoke(!showJoke)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  {showJoke ? "Hide Punchline" : "Reveal Punchline"}
                </button>
                
                <button 
                  onClick={() => {
                    fetchRandomJokes();
                    setShowJoke(false);
                  }}
                  className="flex-1 bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Next Joke
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                Joke ID: {randomJoke.id || "N/A"}
              </div>
            </>
          )}
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          Made with ❤️ and laughter
        </div>
      </div>
    </div>
  );
}

export default RandomJokes;
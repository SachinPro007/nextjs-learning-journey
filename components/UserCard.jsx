"use client";

import "../globals.css";
import { useState } from "react";

const UserCard = ({ user }) => {
  const { name, gender, probability, count } = user;
  const [isHovered, setIsHovered] = useState(false);

  // Gender-based styling
  const genderStyles = {
    male: {
      card: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      accent: "bg-blue-500",
      text: "text-blue-700",
      stats: "bg-blue-500/10",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    female: {
      card: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
      accent: "bg-pink-500",
      text: "text-pink-700",
      stats: "bg-pink-500/10",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    default: {
      card: "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200",
      accent: "bg-gray-500",
      text: "text-gray-700",
      stats: "bg-gray-500/10",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  };

  const style = genderStyles[gender] || genderStyles.default;

  return (
    <div
      className={`relative rounded-2xl border-2 p-6 w-80 transition-all duration-300 ${
        style.card
      } ${isHovered ? "shadow-lg transform -translate-y-1" : "shadow-md"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div
        className={`absolute top-0 left-0 w-full h-2 ${style.accent} rounded-t-2xl`}
      ></div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 capitalize">{name}</h2>
        <div className={`p-2 rounded-full ${style.accent} text-white`}>
          {style.icon}
        </div>
      </div>

      <div className="flex items-center justify-center my-6">
        <div className="relative">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold text-white ${style.accent}`}
          >
            {name?.charAt(0).toUpperCase()}
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-white ${style.accent} border-2 border-white`}
          >
            {Math.round(probability * 100)}%
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-600">Gender</span>
          <span className={`font-semibold capitalize ${style.text}`}>
            {gender}
          </span>
        </div>
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${style.accent}`}
            style={{ width: `${probability * 100}%` }}
          ></div>
        </div>
      </div>

      <div className={`rounded-xl p-4 ${style.stats}`}>
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {count?.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Count</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {(probability * 100).toFixed(0)}%
            </div>
            <div className="text-sm text-gray-600">Certainty</div>
          </div>
        </div>
      </div>

      {user.error && (
        <div className="mt-4 text-xs text-red-500 text-center">
          {user.error}
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500 text-center">
        Design and Develop by Sachin
      </div>
    </div>
  );
};

export default UserCard;

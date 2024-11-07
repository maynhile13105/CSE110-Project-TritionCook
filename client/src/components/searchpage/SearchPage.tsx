import React from 'react';
import './SearchPage.css';

const SearchPage: React.FC = () => {
  return (
    <div className="search-page">
      <div className="search-bar">
        <input type="text" placeholder="Search recipes..." />
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.0771 27.0386C56.0771 13.2101 44.867 2 31.0386 2C17.2101 2 6 13.2101 6 27.0386C6 40.867 17.2101 52.0771 31.0386 52.0771C37.26 52.0771 42.9514 49.8081 47.3304 46.0524L62.712 61.4359L62.9281 61.6224C63.6821 62.1818 64.7521 62.1197 65.4359 61.4359C66.188 60.6837 66.188 59.4642 65.4359 58.712L50.0524 43.3304C53.8081 38.9514 56.0771 33.26 56.0771 27.0386ZM9.85208 27.0383C9.85208 15.3373 19.3376 5.85181 31.0386 5.85181C42.7395 5.85181 52.225 15.3373 52.225 27.0383C52.225 38.7393 42.7395 48.2248 31.0386 48.2248C19.3376 48.2248 9.85208 38.7393 9.85208 27.0383Z" fill="#B3B3B3"/>
                <path d="M47.3304 46.0524L48.3912 44.9918L47.4087 44.0092L46.3539 44.9138L47.3304 46.0524ZM62.712 61.4359L61.6513 62.4965L61.6902 62.5354L61.7318 62.5713L62.712 61.4359ZM62.9281 61.6224L61.9479 62.7578L61.9898 62.794L62.0343 62.827L62.9281 61.6224ZM65.4359 58.712L66.4965 57.6514L66.4965 57.6513L65.4359 58.712ZM50.0524 43.3304L48.9138 42.3539L48.0092 43.4087L48.9918 44.3912L50.0524 43.3304ZM31.0386 3.5C44.0386 3.5 54.5771 14.0386 54.5771 27.0386H57.5771C57.5771 12.3817 45.6954 0.5 31.0386 0.5V3.5ZM7.5 27.0386C7.5 14.0386 18.0386 3.5 31.0386 3.5V0.5C16.3817 0.5 4.5 12.3817 4.5 27.0386H7.5ZM31.0386 50.5771C18.0386 50.5771 7.5 40.0386 7.5 27.0386H4.5C4.5 41.6954 16.3817 53.5771 31.0386 53.5771V50.5771ZM46.3539 44.9138C42.2365 48.4451 36.8884 50.5771 31.0386 50.5771V53.5771C37.6315 53.5771 43.6663 51.1711 48.307 47.191L46.3539 44.9138ZM63.7728 60.3753L48.3912 44.9918L46.2697 47.113L61.6513 62.4965L63.7728 60.3753ZM63.9083 60.4869L63.6922 60.3004L61.7318 62.5713L61.9479 62.7578L63.9083 60.4869ZM64.3752 60.3752C64.2249 60.5255 63.9876 60.5407 63.8219 60.4177L62.0343 62.827C63.3766 63.823 65.2793 63.7138 66.4965 62.4965L64.3752 60.3752ZM64.3752 59.7727C64.5416 59.9391 64.5416 60.2088 64.3752 60.3752L66.4965 62.4965C67.8345 61.1586 67.8345 58.9893 66.4965 57.6514L64.3752 59.7727ZM48.9918 44.3912L64.3753 59.7728L66.4965 57.6513L51.113 42.2697L48.9918 44.3912ZM54.5771 27.0386C54.5771 32.8884 52.4451 38.2365 48.9138 42.3539L51.191 44.307C55.1711 39.6663 57.5771 33.6315 57.5771 27.0386H54.5771ZM31.0386 4.35181C18.5092 4.35181 8.35208 14.5089 8.35208 27.0383H11.3521C11.3521 16.1657 20.166 7.35181 31.0386 7.35181V4.35181ZM53.725 27.0383C53.725 14.5089 43.568 4.35181 31.0386 4.35181V7.35181C41.9111 7.35181 50.725 16.1657 50.725 27.0383H53.725ZM31.0386 49.7248C43.568 49.7248 53.725 39.5677 53.725 27.0383H50.725C50.725 37.9108 41.9111 46.7248 31.0386 46.7248V49.7248ZM8.35208 27.0383C8.35208 39.5677 18.5092 49.7248 31.0386 49.7248V46.7248C20.166 46.7248 11.3521 37.9108 11.3521 27.0383H8.35208Z" fill="#B3B3B3"/>
            </g>
          </svg>
        </div>
      </div>
      <div className="info-text">
        <p>
          Busy today? <span className="no-worries">No worries!</span> Check out our quick recipes that’ll have you cooking up a storm in <span className="under-30">under 30 minutes.</span>
        </p>
      </div>
    </div>
  );
}

export default SearchPage;
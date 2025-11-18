
const container = document.getElementById("cards-container");
fetch('assets/js/cards-data.json')
.then(res => res.json())
.then( cardsData => {
    cardsData.forEach(card => {
        // Create card element
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
    
        // Card header: logo + title
        const headerDiv = document.createElement("div");
        headerDiv.classList.add("card-header");
        headerDiv.innerHTML = `
            <img class="card-logo" src="${card.logo}" alt="Logo" />
            <h3 class="card-title">${card.title}</h3>
        `;
        cardDiv.appendChild(headerDiv);
    
        // Audio clip
        const audioDiv = document.createElement("div");
        audioDiv.classList.add("card-audio");
        audioDiv.innerHTML = `
            <audio controls>
                <source src="${card.audio}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        cardDiv.appendChild(audioDiv);
    
        // Buttons row
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("card-buttons");
        buttonsDiv.innerHTML = `
            <button class="btn-icon"> 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12"
                  stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5"
                  stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <button class="btn-icon">
           <svg width="16" height="16" fill="currentColor">favorite icon</svg>
                  <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                   d="M0.75 11.5833H7.75M12.75 10.5H15.75M15.75 10.5H18.75M15.75 10.5V13.75M15.75 10.5V7.25M0.75 6.16667H11.75M0.75 0.75H11.75"
                   stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                 </svg>
            </button>
            <button class="btn-icon">
             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                     d="M20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75Z"
                    stroke="#777980" stroke-width="1.5" />
                     <path
                     d="M10.9922 15.75V10.75C10.9922 10.2786 10.9922 10.0429 10.8457 9.89645C10.6993 9.75 10.4636 9.75 9.99219 9.75"
                     stroke="#777980" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M10.742 6.75H10.751" stroke="#777980" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  </svg>
            </button>
        `;
        cardDiv.appendChild(buttonsDiv);
    
        // Append card to container
        container.appendChild(cardDiv);
    });

})
.catch(error => console.log(error))







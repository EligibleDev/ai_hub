const loadData = async (toolId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json();
    const tools = data.data.tools;
    loadTools(tools);
}

const loadTools = async (tools) => {
    const cardGrid = document.getElementById('card-grid');

    const card = document.createElement('div');
    card.classList.add('card');

    tools.forEach(tool => {
        const card = document.createElement('div');
        card.classList.add('card');
        console.log(tool)

        card.innerHTML = `
        <img src="${tool.image}" alt="No Image Available">
        <h3 class="title">Features</h3>
        <ol>
            ${tool.features.map(feature => `<li>${feature}</li>`).join("")}
        </ol>
        <hr>
    
        <div class="info">
            <div>
                <h3 class="title">${tool.name}</h3>
                <div class="time">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span class="date">${tool.published_in}</span>
                </div>
            </div>
    
            <button class="go-button">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>`;
        
        cardGrid.appendChild(card);

    });
}
loadData();
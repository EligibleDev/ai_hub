const loadData = async (isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    const data = await res.json();
    const tools = data.data.tools;
    loadTools(tools, isShowAll);
}

const loadTools = async (tools, isShowAll) => {
    const showAllButton = document.getElementById('show-all-button')
    if(!isShowAll){
        showAllButton.classList.remove('hidden'),
        tools = tools.slice(0, 6);
    }else{
        showAllButton.classList.add('hidden');
    }

    const sortButton = document.getElementById('sort-button')
    sortButton.addEventListener('click', function() {
        sort(tools);
    })

    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

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

const displayAll = () => {
    loadData(true);
}

const sort = (sortedTools) => {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    const card = document.createElement('div');
    card.classList.add('card');

    const sorted = sortedTools.sort((x, y) => parseInt(x.published_in) - parseInt(y.published_in));

    sorted.forEach(tool => {
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
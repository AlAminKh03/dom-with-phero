const mileStoneData = JSON.parse(data).data

function loadMileStones() {
    const mileStones = document.querySelector(".milestones")

    mileStones.innerHTML = `${mileStoneData.map(function (mileStones) {
        return ` <div>
<div class="milestones">
    <div class="milestone border-b">
        <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div onclick="openModules(this, ${mileStones._id})">
                <p>
                    ${mileStones.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
        </div>
        <div class="hidden_panel">
      ${mileStones.modules.map(function (modules) {
            return `
      
        <div class="module border-b">
            <p>${modules.name}</p>
        </div>
        `
        }).join("")}
        </div>
    </div>
</div>`
    }).join("")}`

}

function openModules(mileStoneElement, id) {
    const currentMilestone = mileStoneElement.parentNode.nextElementSibling;
    const shownMileStone = document.querySelector(".show")
    const activemileStone = document.querySelector(".active")

    if (!mileStoneElement.classList.contains("active") && activemileStone) {
        activemileStone.classList.remove("active");
    }

    if (!currentMilestone.classList.contains("show") && shownMileStone) {
        shownMileStone.classList.remove("show");
    }


    currentMilestone.classList.toggle("show")
    mileStoneElement.classList.toggle("active")

    opendetails(id)
}

function opendetails(id) {
    const title = document.querySelector(".title");
    const details = document.querySelector(".details")

    title.innerText = `${mileStoneData[id].name}`
    details.innerText = `${mileStoneData[id].description}`
}

loadMileStones()
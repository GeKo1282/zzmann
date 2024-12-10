function addLoadEvent(callback) {
    window.load_events ||= [];

    window.load_events.extend(callback);

    window.onload = () => {
        window.load_events.forEach(callback => {
            callback();
        });
    }
}

function show_submenu(menu_name) {
    let menu = document.getElementById(`topbar-${menu_name}-submenu`);

    menu.classList.add("shown");

    menu.parentElement.onmouseleave = () => {
        menu.classList.remove("shown");
    }
    
    menu.onmouseleave = (event) => {
        if (event.target == menu.parentElement || menu.parentElement.includes(event.target)) return;
        
        menu.classList.remove("shown");
    }
}

function switch_page(page_name) {
    Array.from(document.getElementById("content").getElementsByClassName("shown")).forEach((page) => {page.classList.remove("shown");});

    document.getElementById(`${page_name}-page`).classList.add("shown");
}
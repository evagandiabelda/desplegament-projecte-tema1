const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {

        event.preventDefault();

        const sections = document.querySelectorAll('.seccio');
        sections.forEach(section => {
            section.classList.add('hide');
        });

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.remove('hide');
        }
    });
});

let botoModifContingut = document.getElementById("boto-modif-contingut");

botoModifContingut.addEventListener('click', () => {
    document.getElementById('demo').innerHTML = 'Contingut modificat!';
});

let botoModifAtribut = document.getElementById("boto-modif-atribut");

botoModifAtribut.addEventListener('click', () => {
    document.getElementById('imatge').src = "/imgs/imatge2.png";
})
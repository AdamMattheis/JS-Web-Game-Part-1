function newImage (url,left,bottom){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}
newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let invItem = document.createElement('img')
        invItem.src = url;
        inv.append(invItem)
    })
    return item
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)



export default function menuFormatter (menu, parent, formatted) {
    const menuCopy = JSON.parse(JSON.stringify(menu));
    menuCopy.forEach(item => {
        if (item.sub) {
            item.sub.forEach(subItem => {
                subItem.path = `${item.path}${subItem.path}`
            })
        }
    });

    return menuCopy;
}
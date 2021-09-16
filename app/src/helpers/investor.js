
export const investor = (url, name, id) => {

    const investor = {

        id: `${id}`,
        name: `${name}`,
        url: `${process.env.PUBLIC_URL}/assets/investors/${url}`

    }
    return investor;
}
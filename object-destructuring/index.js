const $root = document.querySelector('#root')

const developer = {
    id: 1,
    user: 'RamonCP',
    age: '18',
    learning: 'JavaScript'
}

const devElement = ({ id, user, age, learning }) => (
    `
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>User</td>
                <td>Age</td>
                <td>Learning</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${id}</td>
                <td>${user}</td>
                <td>${age}</td>
                <td>${learning}</td>
            </tr>
        </tbody>
    </table>
    `
);

const dev = devElement(developer)

$root.innerHTML = dev
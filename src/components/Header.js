import './Header.css';

function Header() {
    const inlineSheet = {
        color: 'red',
    };
    
    return (
        <>
            <h1 style={inlineSheet}>TripVista - The Best Booking App</h1>
            <p>Add Style</p>
        </>
    );
}

export default Header;

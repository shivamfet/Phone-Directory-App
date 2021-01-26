import React from 'react'

const Header = function() {
    const headerStyle = {
        textAlign:'center' , 
        background:'#000' , 
        color : '#fff' , 
        padding:10 , 
        textTransform:'uppercase'
    }
    return (
    <div style={headerStyle}>
        Phone Directory
    </div>
    );
}

// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 Phone Directory from class;
//             </div>
//         );
//     }
// }

export default Header;
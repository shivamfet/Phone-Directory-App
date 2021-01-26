import React from 'react'

const Header = function(props) {
  
    return (
    <div className="header">
        {props.heading}
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
import Link from 'next/link'
import { withRouter } from 'next/router' //withRouter adds the router prop to the const

//use the router prop to get the pathname, split it on '/' and style the link by giving it a classname which matches the base path (/writing, /portfolio)
const NavButton = (props) => (
  <Link href={props.path}>
    {props.path !== '/' ? (
      <a target="_blank" rel="noopener noreferrer">
        <div
          className={`menu-btn-lg pl-0 cursor-pointer ${
            `/${props.router.pathname.split('/')[1]}` === props.path
              ? 'menu-btn-lg-active'
              : ''
          }`}
        >
          {props.label}
        </div>
      </a>
    ) : (
      <div
        className={`menu-btn-lg pl-0 cursor-pointer ${
          `/${props.router.pathname.split('/')[1]}` === props.path
            ? 'menu-btn-lg-active'
            : ''
        }`}
      >
        {props.label}
      </div>
    )}
  </Link>
)

export default withRouter(NavButton)

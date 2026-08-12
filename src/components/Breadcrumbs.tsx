import { Link } from "react-router-dom";
export default function Breadcrumbs({items}:{items:{label:string;to?:string}[]}){return <nav aria-label="Breadcrumb" className="breadcrumbs"><Link to="/">Home</Link>{items.map(item=><span key={item.label}>› {item.to?<Link to={item.to}>{item.label}</Link>:item.label}</span>)}</nav>}

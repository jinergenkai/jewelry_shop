import NavItem from "./nav-item";

export default function Header() {
  return (
    <div className="absolute z-50 w-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 hover:bg-white hover:text-black">
        <h1 className="ml-[50%] mt-10 translate-x-[-50%] inline-block text-8xl">JEWELRY SHOPE</h1>
      <div className="flex items-center justify-center pt-10">

          {/* New in, jewelry watches accessories decorations gifts */}
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/products">Products</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/login">Login</NavItem>
          <NavItem href="/register">Register</NavItem>
      </div>
    </div>
  );
}

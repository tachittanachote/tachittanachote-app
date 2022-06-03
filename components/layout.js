import { CustomHead } from "../partials"

export default function Layout({ children }) {
    return (
        <>
            <CustomHead></CustomHead>
            <main>{children}</main>
        </>
    )
}
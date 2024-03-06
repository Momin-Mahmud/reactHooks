import { ValueProvider } from "../ValueContext";
import ValueUpdater from "./ValueUpdater";


export default function Example() {
    return (
        <ValueProvider>
            <ValueUpdater />
        </ValueProvider>
    );
}
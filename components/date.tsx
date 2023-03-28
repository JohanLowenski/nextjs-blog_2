// import { parseISO, format } from "date-fns";

// // rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
// export default function Date({ dateString }) {
// 	const date = parseISO(dateString);
// 	return <time dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
// }

import { parseISO, format } from "date-fns";

// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Date({ dateString }: { dateString: string }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
}

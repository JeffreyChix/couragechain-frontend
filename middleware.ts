export { default } from "next-auth/middleware";

export const config = { matcher: ["/secure/app/admin/dashboard/:path*"] };

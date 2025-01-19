import Container from "@/components/container";
import Socials from "@/components/socials";
import config from "@/config";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-10">
            <Container className="flex flex-col w-full gap-10">
                <p className="text-muted-foreground text-sm sm:text-base">
                    © Copyright {new Date().getFullYear()}
                </p>
                <div className="w-full space-y-6">
                    <div className="overflow-hidden mb-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 7.93"
                            className="fill-background"
                        >
                            <path
                                d="M0,7.73V.1H1.69V3.19H2.87V.1H4.56V7.73H2.87V4.4H1.69V7.73Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M5.35,7.73,6.79.1H8.71l1.42,7.63H8.58L8.32,6.12H7.2L6.94,7.73Zm2-2.62h.81l-.4-3Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M11.6,7.73,10.23.1h1.44l.82,5.18L13.25.1h1.53l-1.4,7.63Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M15.54,7.73V.1H19V1.25H17.22v1.9h1.33V4.31H17.22V6.59H19V7.73Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M21.79,7.73,23.23.1h1.92l1.43,7.63H25l-.25-1.61H23.65l-.27,1.61Zm2-2.62h.81l-.41-3Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M29.76,7.73V.1h2.56a2.25,2.25,0,0,1,1.13.26,1.69,1.69,0,0,1,.66.76,3.06,3.06,0,0,1,.22,1.2A2.5,2.5,0,0,1,34,3.67a1.47,1.47,0,0,1-.79.64,3.25,3.25,0,0,1-1.12.18h-.68V7.73Zm1.68-4.42H32a.78.78,0,0,0,.47-.11.5.5,0,0,0,.21-.34,2.32,2.32,0,0,0,.05-.57,2.51,2.51,0,0,0,0-.51.59.59,0,0,0-.2-.36.77.77,0,0,0-.5-.13h-.56Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M35.14,7.73V.1h2.1a4.72,4.72,0,0,1,1.33.17,1.66,1.66,0,0,1,.88.61,2.1,2.1,0,0,1,.32,1.24,4.28,4.28,0,0,1-.08.84,1.63,1.63,0,0,1-.27.63,1.58,1.58,0,0,1-.58.45l1,3.69H38.14L37.3,4.31h-.48V7.73Zm1.68-4.39h.47a1.08,1.08,0,0,0,.56-.12.75.75,0,0,0,.28-.37,1.93,1.93,0,0,0,.08-.58A1.36,1.36,0,0,0,38,1.51a.72.72,0,0,0-.66-.28h-.55Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M42.89,7.84a2.6,2.6,0,0,1-1.35-.3,1.74,1.74,0,0,1-.72-.86,3.91,3.91,0,0,1-.21-1.35V2.5a3.83,3.83,0,0,1,.21-1.35A1.68,1.68,0,0,1,41.54.3,2.6,2.6,0,0,1,42.89,0a2.65,2.65,0,0,1,1.37.3,1.65,1.65,0,0,1,.73.85A3.83,3.83,0,0,1,45.2,2.5V5.33A3.91,3.91,0,0,1,45,6.68a1.71,1.71,0,0,1-.73.86A2.65,2.65,0,0,1,42.89,7.84Zm0-1.19a.54.54,0,0,0,.39-.13.64.64,0,0,0,.16-.34,2,2,0,0,0,0-.43V2.08a2,2,0,0,0,0-.43.64.64,0,0,0-.16-.33.5.5,0,0,0-.39-.13.45.45,0,0,0-.36.13.64.64,0,0,0-.16.33,2,2,0,0,0,0,.43V5.75a3,3,0,0,0,0,.43.63.63,0,0,0,.15.34A.53.53,0,0,0,42.89,6.65Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M45.71,7.93V6.75a2.63,2.63,0,0,0,.43,0,.7.7,0,0,0,.29-.1.58.58,0,0,0,.15-.24,1.49,1.49,0,0,0,0-.4V.1h1.69v6a2.88,2.88,0,0,1-.16,1,1.1,1.1,0,0,1-.54.62,2.27,2.27,0,0,1-1.08.21Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M49.44,7.73V.1h3.43V1.25H51.13v1.9h1.32V4.31H51.13V6.59h1.76V7.73Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M55.83,7.84a2.6,2.6,0,0,1-1.37-.31,1.74,1.74,0,0,1-.71-.89,3.86,3.86,0,0,1-.2-1.34V2.55a3.94,3.94,0,0,1,.2-1.36,1.72,1.72,0,0,1,.71-.88,3.24,3.24,0,0,1,2.7,0,1.53,1.53,0,0,1,.67.77A3.19,3.19,0,0,1,58,2.2v.66H56.38V2.1c0-.15,0-.29,0-.43a.65.65,0,0,0-.14-.35.48.48,0,0,0-.39-.13.49.49,0,0,0-.39.14.76.76,0,0,0-.16.35,3.19,3.19,0,0,0,0,.45V5.72a2.19,2.19,0,0,0,0,.46.68.68,0,0,0,.17.34.49.49,0,0,0,.37.13.46.46,0,0,0,.38-.14.65.65,0,0,0,.14-.35,3.25,3.25,0,0,0,0-.44v-.8H58v.65a3.5,3.5,0,0,1-.19,1.17,1.66,1.66,0,0,1-.67.81A2.52,2.52,0,0,1,55.83,7.84Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M59.64,7.73V1.36H58.49V.1h4V1.36H61.33V7.73Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M65.56,7.73V.1h1.69V7.73Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M68.39,7.73V.1h1.18l1.57,3.68V.1h1.39V7.73H71.39l-1.56-4v4Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M76.05,7.73,76.18.1H78l.84,4.44L79.73.1h1.75l.13,7.63h-1.2l-.14-5.07-.88,5.07H78.32l-.94-5.11-.11,5.11Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M82.72,7.73V.1h1.69V7.73Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M85.54,7.73V.1h1.19l1.56,3.68V.1h1.4V7.73H88.55L87,3.78v4Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M90.83,7.73V.1h1.93a4,4,0,0,1,1.55.25,1.49,1.49,0,0,1,.78.78,3.61,3.61,0,0,1,.23,1.38V5.28a3.69,3.69,0,0,1-.23,1.4,1.5,1.5,0,0,1-.77.8,3.77,3.77,0,0,1-1.54.25Zm1.68-1.17h.27a1,1,0,0,0,.55-.11.44.44,0,0,0,.21-.34,2.9,2.9,0,0,0,0-.56V2.22a2,2,0,0,0-.06-.54.44.44,0,0,0-.22-.31,1.19,1.19,0,0,0-.54-.09h-.26Z"
                                fill="var(--background)"
                            ></path>
                            <path
                                d="M97,5.73V4.51a4.71,4.71,0,0,0,.75-.73,3.6,3.6,0,0,0,.54-.87A2.36,2.36,0,0,0,98.48,2a.87.87,0,0,0-.12-.51A.48.48,0,0,0,98,1.31a.44.44,0,0,0-.34.13.5.5,0,0,0-.14.37,1.1,1.1,0,0,0,0,.27c0,.08,0,.16.08.25l-1.39.32a2.57,2.57,0,0,1-.11-.44,2.14,2.14,0,0,1-.05-.45A1.66,1.66,0,0,1,96.58.47a2.43,2.43,0,0,1,2.91,0A1.9,1.9,0,0,1,100,1.92,2.9,2.9,0,0,1,99.81,3a3.5,3.5,0,0,1-.55,1,4.72,4.72,0,0,1-.88.84v.93Zm0,2V6.27h1.49V7.73Z"
                                fill="var(--background)"
                            ></path>
                        </svg>
                    </div>
                    <div className="text-center">
                        <Link
                            href="https://wa.me/21620714894"
                            className="inline-block uppercase hover:text-primary-foreground px-7 py-4 rounded-full hover:bg-primary transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Connect now
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <Socials
                        items={config.about.socials}
                        iconSize="26px"
                        className="gap-2"
                    />
                    <div className="flex flex-col gap-2 sm:flex-col-reverse text-sm text-muted-foreground text-center sm:text-left">
                        <p>
                            Code snippets are{" "}
                            <Link
                                href="https://opensource.org/license/MIT"
                                className="underline text-accent"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                MIT licensed
                            </Link>
                        </p>
                        <p className="tracking-wide">
                            Developed with love by{" "}
                            <span className="text-accent underline">
                                {config.about.name}
                            </span>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

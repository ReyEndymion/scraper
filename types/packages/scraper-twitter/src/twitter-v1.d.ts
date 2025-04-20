export default function twitterdl(url: string): Promise<{
    content_type: string;
    url: string;
    height: string;
    width: string;
    bitrate?: number | undefined;
}[]>;

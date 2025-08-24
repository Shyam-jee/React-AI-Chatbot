export function isHeading(str)
{
    return /^\*\*.*\*$/.test(str);
}

export function replaceHeadingStars(str)
{
    return str.replace(/^\*\*(.*)\*$/, "$1");
}
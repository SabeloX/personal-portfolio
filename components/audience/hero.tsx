import { Container, Typography } from "@mui/material"

export interface HeroProps {
    textColor: string;
    name: string;
    profession: string;
    slogan: string;
}

export const Hero = ({ textColor, name, profession, slogan } : HeroProps) => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <Typography 
                className="heading"
                sx={{
                    color: textColor,
                    fontSize: "44px"
                }} variant="h4">{name}</Typography>
            <Typography 
                className="heading" sx={{ color: textColor,
                    fontSize: "76px" }} variant="h2">{ profession }</Typography>
            <Typography
                className="text" sx={{ color: textColor ,
                    fontSize: "20px"}} variant="subtitle2">{ slogan }</Typography>
        </Container>
    )
}
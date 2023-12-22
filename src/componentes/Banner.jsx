import styled from 'styled-components'

const BannerSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Banner = () => {
    return (
        <BannerSection>
            <img style={{ width: "1130px" }} src="./banner_movie_time.jpg" alt="banner"/>
        </BannerSection>
    )
};

export default Banner
import { Box, Typography } from "@mui/material";
import Layout from "../components/layouts/Layout";
import Tarjeta from "../components/ui/Tarjeta";
import TarjetaRecommend from "../components/ui/TarjetaRecommend";

export default function Home({res}) {
  console.log(res.results)
  return (
    <Layout>
      <Typography variant="h5">Trending</Typography>
      <Box>
        {
          res.results.map(el => (
            <Tarjeta key={el.title} el={el} />
          ))
        }
      </Box>
      
      <Typography variant="h5">Recommend for you</Typography>
      {
        /*res.map(el => (
          !el.isTrending ? <TarjetaRecommend key={el.title} el={el} /> : ""
        ))*/
      }
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {
  const data  = await fetch("https://api.themoviedb.org/3/search/movie?api_key=c79fbac57c4206c43850219a56a537f8&language=en-US&query=titanic&page=1&include_adult=false")
  const res = await data.json();

  return {
    props: {
      res
    }
  }
}
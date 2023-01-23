import BlogCard from "@/src/components/dashboard/BlogCard";
import DailyActivity from "@/src/components/dashboard/DailyActivity";
import ProductPerfomance from "@/src/components/dashboard/ProductPerfomance";
import SalesOverview from "@/src/components/dashboard/SalesOverview";
import { Grid } from "@mui/material";

export default function Index() {
  return (
    

        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerfomance />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      
  );
}

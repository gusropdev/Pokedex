import { Grid2 } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function Skeletons() {
    return (

        <Grid2 container spacing={3} width={"100%"}>
            < Skeleton variant="rounded" width={"100%"} height={260} />
            < Skeleton variant="rounded" width={"100%"} height={260} />
            < Skeleton variant="rounded" width={"100%"} height={260} />
            < Skeleton variant="rounded" width={"100%"} height={260} />
        </Grid2>

    );
}


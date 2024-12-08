import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Container, List, ListItem, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';


const supabase = createClient(process.env.REACT_APP_SUPA_URL, process.env.REACT_APP_SUPA_TOKEN);

function App() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        const getAPI = async () => {
            let { data, error_check } = await supabase
                .from('brandcounter')
                .select('*');

            setdata(data);
        };
        getAPI();
    }, []);
    console.log(data)

    return (
        <div>
            <title>HealthScoped🔎</title>
            <Container maxWidth="sm" sx={{ mt: 1, mb: 1 }}>
                <Typography
                    fontStyle={"normal"}
                    variant="h3"
                    align="center"
                    color="white"

                >
                    HealthScoped Stats🔢
                </Typography>
                <List>
                    {data.map((item, index) => (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            key={index}
                        >
                            <ListItem
                                component={Paper}

                                sx={{
                                    borderRadius: 1.5,
                                    mb: 5,
                                    p: 3,

                                    flexDirection: 'column',

                                    alignItems: 'center',
                                    '&:hover': { backgroundColor: 'AliceBlue' },
                                    backgroundColor: 'grey',

                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ fontWeight: '600', textAlign: 'center' }}
                                >
                                    {item.brand_name}
                                </Typography>
                                <Typography

                                    sx={{ color: 'purple', textAlign: 'center' }}
                                >
                                    Scoped: {item.scoped}
                                </Typography>
                            </ListItem>
                        </motion.div>
                    ))}
                </List>
            </Container>

        </div>
    );
}

export default App;

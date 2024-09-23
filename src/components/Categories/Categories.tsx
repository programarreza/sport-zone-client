import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import { Link } from "react-router-dom";
import Container from "../Container";
import { Card, CardContent } from "../ui/card";
import { TCategory } from "@/types";
import Loading from "../Loading/Loading";

const Categories = () => {
  const { data, isLoading } = useGetCategoryQuery("");

  return (
    <div className="min-h-screen pb-12 bg-[#020228f6]">
      <Container>
        <div>
          {isLoading && <Loading />}
          <h2 className="mb-12 pb-5 text-white text-3xl md:text-4xl text-center pt-12   border-b-2 border-[#f57c48] w-fit mx-auto font-semibold">
            Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {data?.data?.map((category: TCategory) => (
              <div key={category._id}>
                <Link to={`/products/${category?.categoryName}`}>
                  <Card className="bg-[#02022d] text-white">
                    <CardContent>
                      <div className="grid w-full items-center gap-4 mt-6">
                        <div className="flex flex-col space-y-1.5">
                          <div className="w-full h-52">
                            <img
                              className="w-full h-full"
                              src={category?.image}
                              alt=""
                            />
                          </div>
                          <h2 className="font-semibold">
                            {category.categoryName}
                          </h2>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;

import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import { TCategory } from "@/types";
import { Link } from "react-router-dom";
import Container from "../Container";
import LoadingSection from "../Loading/LoadingSection";
import { Card, CardContent } from "../ui/card";

const Categories = () => {
  const { data, isLoading } = useGetCategoryQuery("");

  return (
    <div className="min-h-screen pb-12 bg-[#190700]">
      <Container>
        <div>
          {/* {isLoading && <Loading />} */}
          <h2 className="mb-12 pb-5 text-white text-3xl md:text-4xl text-center pt-12   border-b-2 border-[#FF4500] w-fit mx-auto font-semibold">
            Categories
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {data?.data?.map((category: TCategory) => (
              <div key={category._id}>
                <Link to={`/products/${category?.categoryName}`}>
                  <Card className="bg-[#120500] text-white border-[#FF4500]">
                    <CardContent className="p-0">
                      <div className="grid w-full items-center gap-8  p-2">
                        <div className="flex flex-col space-y-1.5">
                          <div className="w-full h-52 group rounded-lg relative items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 transition-shadow ">
                            <img
                              className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-125 translate-transform duration-500"
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

          {isLoading && <LoadingSection />}
        </div>
      </Container>
    </div>
  );
};

export default Categories;

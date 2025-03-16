import { Link } from 'react-router-dom';

export default function TrainingPrograms() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-center text-[#f1692f] mb-4">
                    Chương trình đào tạo của MCI
                </h2>
                <div className="flex justify-center mb-12">
                    <div className="w-44 h-1 bg-[#f1692f] rounded"></div>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Program 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-56 h-56 rounded-full bg-[#f1692f] mb-6"></div>
                        <h3 className="text-2xl font-bold text-[#f1692f] mb-3">
                            Phân tích dữ liệu
                        </h3>
                        <p className="text-[16px] text-gray-700 text-start">
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                            phần mềm rất thu vị và những logic Toán học và các
                            ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện
                            vọng thử đại học vào các ngành công nghệ thông tin
                            trong các trường trên Hà Nội, tuy nhiên em lại không
                            đủ điểm tiêu chí để được vào ngành công nghệ thông
                            tin như mong muốn mà chỉ...
                        </p>
                        <Link
                            to="#"
                            className="text-[#f1692f] hover:underline readMore text-[14px] italic"
                        >
                            Xem thêm
                        </Link>
                    </div>

                    {/* Program 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-56 h-56 rounded-full bg-[#f1692f] mb-6"></div>
                        <h3 className="text-2xl font-bold text-[#f1692f] mb-3">
                            Khoa học dữ liệu
                        </h3>
                        <p className="text-[16px] text-gray-700 text-start">
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                            phần mềm rất thu vị và những logic Toán học và các
                            ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện
                            vọng thử đại học vào các ngành công nghệ thông tin
                            trong các trường trên Hà Nội, tuy nhiên em lại không
                            đủ điểm tiêu chí để được vào ngành công nghệ thông
                            tin như mong muốn mà chỉ...
                        </p>
                        <Link
                            to="#"
                            className="text-[#f1692f] hover:underline readMore text-[14px] italic"
                        >
                            Xem thêm
                        </Link>
                    </div>

                    {/* Program 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-56 h-56 rounded-full bg-[#f1692f] mb-6"></div>
                        <h3 className="text-2xl font-bold text-[#f1692f] mb-3">
                            Kĩ sư dữ liệu
                        </h3>
                        <p className="text-[16px] text-gray-700 text-start">
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                            phần mềm rất thu vị và những logic Toán học và các
                            ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện
                            vọng thử đại học vào các ngành công nghệ thông tin
                            trong các trường trên Hà Nội, tuy nhiên em lại không
                            đủ điểm tiêu chí để được vào ngành công nghệ thông
                            tin như mong muốn mà chỉ...
                        </p>
                        <Link
                            to="#"
                            className="text-[#f1692f] hover:underline readMore text-[14px] italic"
                        >
                            Xem thêm
                        </Link>
                    </div>

                    {/* Program 4 */}
                    <div className="flex flex-col items-center">
                        <div className="w-56 h-56 rounded-full bg-[#f1692f] mb-6"></div>
                        <h3 className="text-2xl font-bold text-[#f1692f] mb-3">
                            Lập trình ứng dụng
                        </h3>
                        <p className="text-[16px] text-gray-700 text-start">
                            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                            phần mềm rất thu vị và những logic Toán học và các
                            ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện
                            vọng thử đại học vào các ngành công nghệ thông tin
                            trong các trường trên Hà Nội, tuy nhiên em lại không
                            đủ điểm tiêu chí để được vào ngành công nghệ thông
                            tin như mong muốn mà chỉ...
                        </p>
                        <Link
                            to="#"
                            className="text-[#f1692f] hover:underline readMore text-[14px] italic readMore"
                        >
                            Xem thêm
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

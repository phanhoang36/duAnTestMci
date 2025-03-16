import { Link } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import banner from '../../img/banerPrimery.jpg'; // Điều chỉnh đường dẫn nếu cần
import FilterBar from '../FiltersBar';
import { articles } from '~/constants';
import Article from '../Article';

export default function BlogDetail() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="w-[812px] mx-auto mt-[62px] mb-[36px]">
                <FilterBar />
            </div>

            {/* Breadcrumb */}
            <div className="bg-[#f5f5f5] py-2">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-[#7c7c7c]">
                        <Link to="#" className="hover:text-[#f1692f]">
                            Trang chủ
                        </Link>
                        <ChevronRight className="h-3 w-3 mx-1" />
                        <Link to="#" className="hover:text-[#f1692f]">
                            Blog
                        </Link>
                        <ChevronRight className="h-3 w-3 mx-1" />
                        <Link to="#" className="hover:text-[#f1692f]">
                            Chia sẻ kinh nghiệm
                        </Link>
                        <ChevronRight className="h-3 w-3 mx-1" />
                        <span className="text-[#f1692f]">
                            Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và
                            mình đã vượt qua nó như nào
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow bg-white py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h1 className="text-2xl font-bold text-[#f1692f] mb-6">
                                Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình
                                và mình đã vượt qua nó như nào
                            </h1>

                            <div className="prose max-w-none mb-8 text-[#3e3e3e]">
                                <p className="mb-4">
                                    Với sự tìm hiểu kỹ càng, 3 em thực nghiệm
                                    công nghệ và phân minh đã trở về từ đường
                                    lược Toán học và các nghệ ngại lập trình.
                                    Sau đó, em đã đăng ký nguyện vọng thử đại
                                    học vào các ngành công nghệ thông tin trung
                                    cấu trường trên thủ đô. Tuy nhiên em đã
                                    không đi đến hầu của đi được vào ngành công
                                    nghệ thông tin nơi mong muốn mà chỉ. Với sự
                                    tìm hiểu kỹ càng, 3 em thực nghiệm công nghệ
                                    và phân minh đã trở về từ đường lược Toán
                                    học và các nghệ ngại lập trình. Sau đó, em
                                    đã đăng ký nguyện vọng thử đại học vào các
                                    ngành công nghệ thông tin trung cấu trường
                                    trên thủ đô. Tuy nhiên em đã không đi đến
                                    hầu của đi được vào ngành công nghệ thông
                                    tin nơi mong muốn mà chỉ...
                                </p>

                                {/* Table of Contents */}
                                <div className="bg-[#f5f5f5] p-4 rounded-md mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="w-6 h-0.5 bg-[#f1692f]"></div>
                                            <div className="w-6 h-0.5 bg-[#f1692f]"></div>
                                            <div className="w-6 h-0.5 bg-[#f1692f]"></div>
                                        </div>
                                        <h3 className="ml-2 font-medium text-[#3e3e3e]">
                                            Nội dung bài viết
                                        </h3>
                                    </div>
                                    <ol className="list-decimal pl-6 space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3e3e3e] hover:text-[#f1692f]"
                                            >
                                                Nội dung bài viết
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3e3e3e] hover:text-[#f1692f]"
                                            >
                                                Nội dung bài viết
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3e3e3e] hover:text-[#f1692f]"
                                            >
                                                Nội dung bài viết
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3e3e3e] hover:text-[#f1692f]"
                                            >
                                                Nội dung bài viết
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-[#3e3e3e] hover:text-[#f1692f]"
                                            >
                                                Nội dung bài viết
                                            </a>
                                        </li>
                                    </ol>
                                </div>

                                {/* Article Content */}
                                <div className="space-y-4">
                                    <p>
                                        Với sự tìm hiểu kỹ càng, 3 em thực
                                        nghiệm công nghệ và phân minh đã trở về
                                        từ đường lược Toán học và các nghệ ngại
                                        lập trình. Sau đó, em đã đăng ký nguyện
                                        vọng thử đại học vào các ngành công nghệ
                                        thông tin trung cấu trường trên thủ đô.
                                        Tuy nhiên em đã không đi đến hầu của đi
                                        được vào ngành công nghệ thông tin nơi
                                        mong muốn mà chỉ. Với sự tìm hiểu kỹ
                                        càng, 3 em thực nghiệm công nghệ và phân
                                        minh đã trở về từ đường lược Toán học và
                                        các nghệ ngại lập trình. Sau đó, em đã
                                        đăng ký nguyện vọng thử đại học vào các
                                        ngành công nghệ thông tin trung cấu
                                        trường trên thủ đô. Tuy nhiên em đã
                                        không đi đến hầu của đi được vào ngành
                                        công nghệ thông tin nơi mong muốn mà
                                        chỉ...
                                    </p>
                                    <p>
                                        Với sự tìm hiểu kỹ càng, 3 em thực
                                        nghiệm công nghệ và phân minh đã trở về
                                        từ đường lược Toán học và các nghệ ngại
                                        lập trình. Sau đó, em đã đăng ký nguyện
                                        vọng thử đại học vào các ngành công nghệ
                                        thông tin trung cấu trường trên thủ đô.
                                        Tuy nhiên em đã không đi đến hầu của đi
                                        được vào ngành công nghệ thông tin nơi
                                        mong muốn mà chỉ. Với sự tìm hiểu kỹ
                                        càng, 3 em thực nghiệm công nghệ và phân
                                        minh đã trở về từ đường lược Toán học và
                                        các nghệ ngại lập trình. Sau đó, em đã
                                        đăng ký nguyện vọng thử đại học vào các
                                        ngành công nghệ thông tin trung cấu
                                        trường trên thủ đô. Tuy nhiên em đã
                                        không đi đến hầu của đi được vào ngành
                                        công nghệ thông tin nơi mong muốn mà
                                        chỉ...
                                    </p>
                                    <p>
                                        Với sự tìm hiểu kỹ càng, 3 em thực
                                        nghiệm công nghệ và phân minh đã trở về
                                        từ đường lược Toán học và các nghệ ngại
                                        lập trình. Sau đó, em đã đăng ký nguyện
                                        vọng thử đại học vào các ngành công nghệ
                                        thông tin trung cấu trường trên thủ đô.
                                        Tuy nhiên em đã không đi đến hầu của đi
                                        được vào ngành công nghệ thông tin nơi
                                        mong muốn mà chỉ. Với sự tìm hiểu kỹ
                                        càng, 3 em thực nghiệm công nghệ và phân
                                        minh đã trở về từ đường lược Toán học và
                                        các nghệ ngại lập trình. Sau đó, em đã
                                        đăng ký nguyện vọng thử đại học vào các
                                        ngành công nghệ thông tin trung cấu
                                        trường trên thủ đô. Tuy nhiên em đã
                                        không đi đến hầu của đi được vào ngành
                                        công nghệ thông tin nơi mong muốn mà
                                        chỉ...
                                    </p>
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-[#f1692f] mb-6">
                                    Các bài đăng liên quan
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {articles.slice(0, 3).map((a, i) => (
                                        <Article
                                            key={i}
                                            article={a}
                                            className={'flex-col'}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Featured img */}
                            <div className="bg-[#f1692f] h-48 rounded-md mb-6"></div>

                            {/* Course Info */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-[#f1692f] mb-4">
                                    Các khóa học
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-b pb-3">
                                        <h4 className="font-medium mb-1">
                                            Phân tích dữ liệu
                                        </h4>
                                    </div>
                                    <div className="border-b pb-3">
                                        <h4 className="font-medium mb-1">
                                            Kỹ sư dữ liệu
                                        </h4>
                                    </div>
                                    <div className="border-b pb-3">
                                        <h4 className="font-medium mb-1">
                                            Khoa học dữ liệu
                                        </h4>
                                    </div>
                                    <div className="border-b pb-3">
                                        <h4 className="font-medium mb-1">
                                            Lập trình ứng dụng
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Registration Form */}
                            <div className="bg-[#f1692f] p-4 rounded-md">
                                <h3 className="text-center font-bold text-white mb-4">
                                    ĐĂNG KÝ TƯ VẤN KHÓA HỌC
                                </h3>
                                <form className="space-y-3">
                                    <div>
                                        <label className="text-xs text-white mb-1 block">
                                            Họ và tên *
                                        </label>
                                        <input
                                            className="w-full p-2 focus:outline-none"
                                            placeholder="Họ và tên"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white mb-1 block">
                                            Số điện thoại *
                                        </label>
                                        <input
                                            className="w-full p-2 focus:outline-none"
                                            placeholder="Số điện thoại"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white mb-1 block">
                                            Email *
                                        </label>
                                        <input
                                            className="w-full p-2 focus:outline-none"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-white mb-1 block">
                                            Khóa học bạn quan tâm
                                        </label>
                                        <select className="w-full p-2 border rounded-md">
                                            <option>Chọn khóa học</option>
                                        </select>
                                    </div>
                                    <button className="w-full bg-[#f1692f] hover:bg-[#e87500] text-white">
                                        ĐĂNG KÝ TƯ VẤN
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

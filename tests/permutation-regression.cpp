#define main archived_main
#include "../src/Portfolio.College/Algorithm_Retry/Permutation/permutation.cpp"
#undef main
#include <stdexcept>

int main()
{
    const std::string samples[] = {"", "a", "ab", "ba", "aa", "abc", "cba", "abdc", "aabb", "dkhc"};
    for (const auto& input : samples)
    {
        auto expected = input;
        if (!std::next_permutation(expected.begin(), expected.end())) expected = input;
        const auto actual = permutation(input);
        if (actual != expected) throw std::runtime_error("Permutation differs for: " + input);
    }
    std::cout << "PASS 10 archived permutation boundary cases" << std::endl;
    return 0;
}

class TService {
    Tags:indivtag[] = [
        {
            name: "Important",
            color: "#DC9393",
            id: 1
        },
        {
            name: "Work",
            color: "#A8D8A5",
            id: 2
        }
    ];

    hexcolor:Map<string, string> = new Map([
        ["Red", "#DC9393"],
        ["Pink", "#FFCECE"],
        ["Purple", "#E0B9F5"],
        ["Yellow", "#ECED9D"],
        ["Green", "#A8D8A5"],
        ["Blue", "#93D1DC"]
    ]);

    addTag(name: string, color:string) {
        let newcolor:string | undefined = this.hexcolor.get(color);
        let newtag:indivtag = {
            name: name,
            color: newcolor || "#DC9393",
            id: this.Tags[this.Tags.length - 1].id + 1,
        }
        this.Tags.push(newtag);
    }

    deleteTag(oldTag:indivtag) {
        this.Tags.splice(this.Tags.indexOf(oldTag), 1);
    }

    getTag() {
        
    }
    
    updateTag() {
    }
}

export interface indivtag{
    name: string;
    color: string;
    id: number;
}

export const TagService = new TService();

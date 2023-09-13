@extends('layouts.main')

@section('content')
    <div>
        <Index></Index>
    </div>
@endsection
<script>
    import Index from "../../js/components";
    export default {
        components: {Index}
    }
</script>
